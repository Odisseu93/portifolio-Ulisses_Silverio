import { Button } from "react-bootstrap";

interface IProps {
  label: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}

export const BtnMenu: React.FC<IProps> = ({ label, onclick }: IProps) => (
  <Button className="btn-menu rounded-pill" onClick={onclick}>
    {label}
  </Button>
);
