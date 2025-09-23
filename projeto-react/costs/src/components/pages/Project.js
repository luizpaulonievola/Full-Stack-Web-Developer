import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from 'components/layout/Message';
import ServiceForm from 'components/service/ServiceForm';
import { parse, v4 as uuidv4 } from 'uuid';
import ServiceCard from '../service/ServiceCard';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false); // Estado para mostrar/ocultar o formulário
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 500));

                const response = await fetch(`/projects/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProject(data);
                setServices(data.services);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProject();
    }, [id]);

    function editPost(project) {
        setMessage('');
        console.log('Projeto atualizado:', project);
        //console.log(typeof project.budget);

        if (project.budget < project.cost) {
            setMessage(
                'O orçamento não pode ser menor que o custo do projeto!',
            );
            setType('error');
            return false;
        }

        // Verifica se project.id existe antes de fazer a requisição
        if (!project.id) {
            console.error('ID do projeto não encontrado');
            return;
        }

        fetch(`/projects/${project.id}`, {
            method: 'PATCH', // Só altera o que se deseja mudar no bd
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage('Projeto atualizado!');
                setType('sucess');
            })
            .catch((err) => console.log(err));
    }

    function createService(project) {
        // Validação e preparação do serviço a ser adicionado.
        setMessage('');

        // O último serviço adicionado ao array 'services'.
        const lastService = project.services[project.services.length - 1];

        // Atribuição de um identificador único ao serviço.
        lastService.id = uuidv4();

        // Converte o custo do serviço para um número.
        const lastServiceCost = lastService.cost;

        // Validação para garantir que o custo do serviço não seja negativo.
        if (lastService.cost < 0) {
            setMessage('O custo do serviço não pode ser um valor negativo.');
            setType('error');
            project.services.pop(); // Remove o serviço inválido.
            return false;
        }

        // Calcula o novo custo total do projeto.
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        // Validação para assegurar que o custo total não exceda o orçamento.
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento excedido. Verifique o custo do serviço.');
            setType('error');
            project.services.pop(); // Remove o serviço que excede o orçamento.
            return false;
        }

        // Atualiza o custo total do projeto.
        project.cost = newCost;

        // Submete a atualização para o servidor via PATCH.
        fetch(`/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false); // Oculta o formulário após o sucesso.
            })
            .catch((err) => console.log(err));
    }

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id,
        );
        const projectUpdated = project;
        projectUpdated.services = servicesUpdated;
        projectUpdated.cost =
            parseFloat(projectUpdated.cost) - parseFloat(cost);

        fetch(`/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then(() => {
                setProject(projectUpdated);
                setServices(servicesUpdated);
                setMessage('Serviço removido com sucesso!');
                setType('sucess');
            })
            .catch((err) => console.log(err));
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className={styles.btn}
                                onClick={toggleProjectForm}
                            >
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.form}>
                                    <p>
                                        <span>Categoria:</span>{' '}
                                        {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total do orçamento: </span> R$
                                        {project.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado: </span> R$
                                        {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.form}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btntext="Concluir Edição"
                                        projectData={project} // passa project como props
                                    />
                                </div>
                            )}
                        </div>

                        <div className={styles.service_form_container}>
                            <h2>Adicine um serviço:</h2>

                            <button
                                className={styles.btn}
                                onClick={toggleServiceForm}
                            >
                                {!showServiceForm
                                    ? 'Adicionar Serviço'
                                    : 'Fechar'}
                            </button>

                            <div className={styles.form}>
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Adicionar Serviço"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))}

                            {services.length === 0 && (
                                <p>Não há serviços cadastrados.</p>
                            )}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;
