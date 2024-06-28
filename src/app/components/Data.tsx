import { Decimal } from "@prisma/client/runtime/library";
type DataProps = {
  nodeID: string;
  longitude: Decimal;
  latitude: Decimal;
};

export default function Data({ nodeID, longitude, latitude }: DataProps) {
  return (
    <div>
      <h3>{nodeID}</h3>
      <h3>{Number(longitude)}</h3>
      <h3>{Number(latitude)}</h3>
    </div>
  );
}
