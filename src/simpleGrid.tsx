import { ColDef } from "ag-grid-community";
import { AgGridAutoResizeToContainer } from "./AgGridAutoResizeToContainer";

export function SimpleGrid() {
  const colDef: ColDef[] = [
    { field: "name", headerName: "Name" },
    { field: "company", headerName: "Company" },
    { field: "phone", headerName: "Phone" },
    { field: "email", headerName: "Email" }
  ];
  const data = [
    {
      name: "Risa Q. Mckee",
      company: "Arcu Associates",
      phone: "07624 574850",
      email: "dolor.nonummy.ac@Morbi.co.uk"
    },
    {
      name: "Sydney Z. Parsons",
      company: "Non Lobortis Company",
      phone: "0800 1111",
      email: "Nam.consequat@quismassaMauris.org"
    },
    {
      name: "Theodore S. Morrow",
      company: "Nec Diam Duis Ltd",
      phone: "0800 1111",
      email: "et.ultrices.posuere@amet.net"
    },
    {
      name: "Fay B. Rosa",
      company: "Sed Corporation",
      phone: "0351 556 7517",
      email: "dictum.ultricies@loremfringilla.com"
    },
    {
      name: "Merrill T. Snider",
      company: "Cum Inc.",
      phone: "07624 451396",
      email: "erat.Etiam.vestibulum@egetnisi.org"
    },
    {
      name: "Ava Y. Howell",
      company: "Iaculis Associates",
      phone: "070 7519 9069",
      email: "metus.In.nec@Curabiturutodio.net"
    },
    {
      name: "Otto W. Fry",
      company: "Sollicitudin Orci Sem Company",
      phone: "055 7691 5693",
      email: "ipsum@arcuVestibulumante.co.uk"
    },
    {
      name: "Duncan P. Short",
      company: "Sed Sem Egestas LLP",
      phone: "(026) 7350 5528",
      email: "luctus.Curabitur.egestas@sedturpis.ca"
    },
    {
      name: "Ella G. Chandler",
      company: "Nascetur Corporation",
      phone: "0800 1111",
      email: "neque@arcueuodio.com"
    },
    {
      name: "Chandler W. Pittman",
      company: "Sit Amet Incorporated",
      phone: "070 6731 6102",
      email: "quis.urna@tellus.org"
    },
    {
      name: "Ishmael O. Gilbert",
      company: "Vitae Nibh Donec Industries",
      phone: "0835 984 5086",
      email: "Ut.tincidunt.vehicula@estconguea.com"
    },
    {
      name: "Guinevere Z. Patton",
      company: "Interdum Sed PC",
      phone: "0500 661765",
      email: "commodo.at@mauris.net"
    },
    {
      name: "Raja K. Boone",
      company: "Id Company",
      phone: "0845 46 45",
      email: "magna.malesuada@euodio.com"
    }
  ];

  return <AgGridAutoResizeToContainer rowData={data} columnDefs={colDef} />;
}
