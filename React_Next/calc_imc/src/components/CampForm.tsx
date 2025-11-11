interface CampFormProps {
  label: string;
  state: any;
  funcState: any;
}

function Compform(props: CampFormProps) {
  return (
    <div className="flex mx-2">
      <label className="w-[60px]">{props.label}</label>
      <input
        className="border p-1 w-full rounded-lg"
        onChange={(e) => {
          props.funcState(e.target.value);
        }}
      />
    </div>
  );
}

export default Compform;
