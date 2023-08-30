interface Container {
  classname: string;
  children: React.ReactNode;
}

function Container({ classname, children }: Container) {
  return <div className={`${classname}`}>{children}</div>;
}

export default Container;
