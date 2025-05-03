import Nav from "./Nav";
import Form from "./Form";

interface HeaderSectionProps {
  carFilter: any[]; // Tu peux remplacer `any[]` par un type plus précis si tu en as un
  carList: any[];
  setCarList: React.Dispatch<React.SetStateAction<any[]>>;
  reservationList: any[];
}

export default function HeaderSection({
  carFilter,
  carList,
  setCarList,
  reservationList
}: HeaderSectionProps) {
  return (
    <div
      className="bg-cover bg-bottom bg-no-repeat h-[70vh] p-3"
      style={{ backgroundImage: "url('/images/img-home.webp')" }}
    >
      <div className="max-w-[1200px] m-auto">
        <Nav />
        <Form
          carFilter={carFilter}
          carList={carList}
          setCarList={setCarList}
          reservationList={reservationList}
        />
      </div>
    </div>
  );
}

