from graphviz import Digraph

# --- Configuração do Gráfico ---
# Cria um novo grafo direcionado.
# 'TB' = Top to Bottom (de cima para baixo)
dot = Digraph("FluxogramaProjeto", comment="Fluxo de Criação de Novo Projeto")
dot.attr(
    rankdir="TB",
    splines="ortho",
    concentrate="true",
    label="Fluxograma de Criação de Novo Projeto",
    fontsize="20",
)
dot.attr("node", shape="box", style="rounded,filled", fontname="Helvetica")

# --- Nós do Fluxograma ---
# Cada nó representa um passo no processo.
dot.node(
    "start",
    "Início",
    shape="Mdiamond",
    style="filled",
    fillcolor="gray",
    fontcolor="white",
)
dot.node(
    "access_page",
    'Usuário acessa a página\\n"/newproject"',
    shape="ellipse",
    style="filled",
    fillcolor="lightblue",
)
dot.node(
    "render_new_project",
    "Renderiza `NewProject`",
    style="filled",
    fillcolor="lightgrey",
)
dot.node(
    "render_project_form",
    "Renderiza `ProjectForm`",
    style="filled",
    fillcolor="lightgrey",
)
dot.node(
    "fetch_categories",
    "`useEffect` busca categorias\\nda API (`/categories`)",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "user_fills_form",
    "Usuário preenche o formulário\\n(nome, orçamento, categoria)",
    shape="ellipse",
    style="filled",
    fillcolor="lightblue",
)
dot.node(
    "update_state",
    "Estado `project` é atualizado\\n(`handChange`, `handleCategory`)",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "click_submit",
    'Usuário clica em\\n"Criar projeto"',
    shape="ellipse",
    style="filled",
    fillcolor="lightblue",
)
dot.node(
    "form_submit",
    "`onSubmit` chama a função `submit`\\ndentro do `ProjectForm`",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "exec_create_post",
    "`submit` chama `createPost`\\n(via props `handleSubmit`)",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "init_costs",
    "`createPost` inicializa\\n`costs` e `services`",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "post_request",
    "Envia dados para a API\\n(POST /projects)",
    shape="cylinder",
    style="filled",
    fillcolor="lightgreen",
)
dot.node(
    "redirect",
    "Redireciona para a\\npágina de projetos",
    shape="box",
    style="filled",
    fillcolor="khaki",
)
dot.node(
    "end", "Fim", shape="Mdiamond", style="filled", fillcolor="gray", fontcolor="white"
)

# --- Conexões (Arestas) ---
# Conecta os nós para mostrar o fluxo.
dot.edge("start", "access_page")
dot.edge("access_page", "render_new_project")
dot.edge("render_new_project", "render_project_form")

# --- Subgrafos (Clusters) ---
# Agrupa nós relacionados para melhor organização visual.

# Cluster para ações dentro do `ProjectForm`
with dot.subgraph(name="cluster_ProjectForm") as c:
    c.attr(
        label="Ações dentro do Componente `ProjectForm`",
        style="filled",
        color="whitesmoke",
    )
    c.node_attr.update(style="filled")
    c.edge("render_project_form", "fetch_categories", label="Carregamento inicial")
    c.edge("fetch_categories", "user_fills_form")
    c.edge("user_fills_form", "update_state")
    c.edge(
        "update_state", "user_fills_form", label="Aguarda mais interações do usuário"
    )
    c.edge("user_fills_form", "click_submit")

# Conexão para fora do cluster do formulário
dot.edge("click_submit", "form_submit")
dot.edge("form_submit", "exec_create_post")

# Cluster para ações dentro da função `createPost`
with dot.subgraph(name="cluster_createPost") as c:
    c.attr(
        label="Ações dentro da Função `createPost`", style="filled", color="lightyellow"
    )
    c.node_attr.update(style="filled", color="white")
    c.edge("exec_create_post", "init_costs")
    c.edge("init_costs", "post_request")

# Conexão final
dot.edge("post_request", "redirect", label="Em caso de sucesso")
dot.edge("redirect", "end")

# --- Geração do Arquivo ---
# O código abaixo irá gerar o arquivo de imagem.
# Você precisa ter o Graphviz instalado no seu sistema.
# https://graphviz.org/download/
# E a biblioteca Python: pip install graphviz

try:
    # Salva o código fonte do gráfico em um arquivo .dot e renderiza a imagem
    dot.render("fluxograma_projeto", view=False, format="png", cleanup=True)
    print("Arquivo 'fluxograma_projeto.png' gerado com sucesso!")
    print(
        "Você pode visualizá-lo no diretório '/home/ubuntu/Full-Stack-Web-Developer/projeto-react/'."
    )
except Exception as e:
    print("Ocorreu um erro ao gerar o fluxograma:", e)
    print(
        "Verifique se você tem o Graphviz instalado e configurado no PATH do seu sistema."
    )
