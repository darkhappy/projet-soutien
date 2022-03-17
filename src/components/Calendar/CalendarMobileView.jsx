import CalendarCard from "./CalendarCard";
import schedule from "../../data/schedule.json";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

export default function CalendarMobileView() {
  let array = {
    Lundi: schedule.monday,
    Mardi: schedule.thursday,
    Mercredi: schedule.wednesday,
    Jeudi: schedule.thursday,
    Vendredi: schedule.friday,
  };
  return Object.keys(array).map((day) => (
    <div className="mb-4" key={day.toLowerCase()}>
      <h2>{day}</h2>
      <CardList array={array[day]} />
    </div>
  ));
}

function CardList({ array }) {
  dayjs.extend(CustomParseFormat);
  return array.map(({ start, c220, biblio }) => (
    <CalendarCard
      start={start}
      end={dayjs(start, "HH:mm").add(50, "m").format("HH:mm")}
      persons={{ c220: c220, biblio: biblio }}
      key={start}
    />
  ));
}
