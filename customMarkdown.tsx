export const customImage = (props: any) => {
  return (
    <img className={"mx-auto max-h-h128"} alt={props.alt} src={props.src} />
  );
};

export const customLink = (props: any) => {
  return (
    <a
      className={"border-solid border-b border-color1 text-lg fontColor"}
      href={props.href}
    >
      {props.children}
    </a>
  );
};
