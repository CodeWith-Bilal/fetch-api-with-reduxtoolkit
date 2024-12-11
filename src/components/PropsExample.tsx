import React from "react";

interface PropsExampleProps {
  title: string;
  count?: number;
  children?: React.ReactNode;
}

const PropsExample: React.FC<PropsExampleProps> = ({
  title,
  count = 0,
  children,
}) => {
  return (
    <div style={{ border: "1px dashed #aaa", padding: 12, borderRadius: 6 }}>
      <h3>{title}</h3>
      <p>This component shows how props are passed down from a parent.</p>
      <p>
        Count prop: <strong>{count}</strong>
      </p>
      {children ? <div style={{ marginTop: 8 }}>{children}</div> : null}
    </div>
  );
};

export default PropsExample;
