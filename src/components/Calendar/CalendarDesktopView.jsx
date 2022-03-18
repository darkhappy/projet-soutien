import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import schedule from "../../data/schedule.json";

const hours = ["11:00","11:55","12:50","13:45","14:40"];

export default function CalendarDesktopView() {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center ">
        <thead>
          <tr className="bg-light-gray">
            <th className="text-uppercase border-2">Heure</th>
            <th className="text-uppercase border-2">Lundi</th>
            <th className="text-uppercase border-2">Mardi</th>
            <th className="text-uppercase border-2">Mercredi</th>
            <th className="text-uppercase border-2">Jeudi</th>
            <th className="text-uppercase border-2">Vendredi</th>
          </tr>
        </thead>
        {Horaire()}
      </table>
    </div>
  );
}

function Horaire() {
  dayjs.extend(CustomParseFormat);
  return (
    <tbody>
    {hours.map((hour) => (
      <tr className="border-2" key={hour + "1"}>
        <th className="align-middle border-2 col-1" scope="row" key={hour + "2"}>
          {hour}
          <br/>
          à
          <br/>
          {dayjs(hour, "HH:mm").add(50, "m").format("HH:mm")}
        </th>        
        {[0,1,2,3,4].map((day) => (
          <td className="border-2 col-2" key={hour + day + "1"}>
            {Disponibilite(day, hour) != null ? (
                <table className="d-flex justify-content-center" key={hour + day + "2"}>
                  <tbody><tr>
                  {Disponibilite(day, hour)[0] != null ? 
                    <td className="border-0 p-1" key={hour + day + "3"}>
                      <div className="text-black" key={hour + day + "4"}>
                        {Disponibilite(day, hour)[0] }
                      </div>
                      <div className="bg-primary rounded text-white" key={hour + day + "5"}>
                        Biblio
                      </div>
                      </td>                  
                  : null}
                  {Disponibilite(day, hour)[1] != null ? 
                    <td className="border-0 p-1" key={hour + day + "6"}>
                      <div className="text-black" key={hour + day + "7"}>
                        {Disponibilite(day, hour)[1] }
                      </div>
                      <div className="bg-success rounded text-white" key={hour + day + "8"}>
                        C-222
                      </div>
                    </td>                  
                  : null}
                  </tr></tbody>
                </table>  
              ) : null}
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  );
}

function Disponibilite(day, start) {
  let result = null;
  if (day == 0)
    schedule.monday.map((d) => 
    {
      if (d.start === start) {
        result = [d.biblio, d.c220];
      }
    })
  else if (day == 1)
    schedule.tuesday.map((d) => 
    {
      if (d.start === start) {
        result = [d.biblio, d.c220];
      }
    })
  else if (day == 2)
    schedule.wednesday.map((d) => 
    {
      if (d.start === start) {
        result = [d.biblio, d.c220];
      }
    })
  else if (day == 3)
    schedule.thursday.map((d) => 
    {
      if (d.start === start) {
        result = [d.biblio, d.c220];
      }
    })
  else if (day == 4)
    schedule.friday.map((d) => 
    {
      if (d.start === start) {
        result = [d.biblio, d.c220];
      }
    })

  return result;
}
