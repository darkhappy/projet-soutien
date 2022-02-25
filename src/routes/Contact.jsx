import "../scss/schedule.css";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header
        title="Nous contactez"
        subtitle="Nos coordonées et notre horaire"
      />
      <div className="container">
        <div className="timetable-img text-center"></div>
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="bg-light-gray">
                <th className="text-uppercase">Heure</th>
                <th className="text-uppercase">Lundi</th>
                <th className="text-uppercase">Mardi</th>
                <th className="text-uppercase">Mercredi</th>
                <th className="text-uppercase">Jeudi</th>
                <th className="text-uppercase">Vendredi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">10:05 à 10:55</td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Dance
                  </span>
                  <div className="margin-10px-top font-size14">9:00-10:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Yoga
                  </span>
                  <div className="margin-10px-top font-size14">9:00-10:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>

                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">9:00-10:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-4 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Dance
                  </span>
                  <div className="margin-10px-top font-size14">9:00-10:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Art
                  </span>
                  <div className="margin-10px-top font-size14">9:00-10:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
              </tr>

              <tr>
                <td className="align-middle">11:00 à 11:50</td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">10:00-11:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray"></td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Art
                  </span>
                  <div className="margin-10px-top font-size14">10:00-11:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Yoga
                  </span>
                  <div className="margin-10px-top font-size14">10:00-11:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    English
                  </span>
                  <div className="margin-10px-top font-size14">10:00-11:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
              </tr>

              <tr>
                <td className="align-middle">11:55 à 12:45</td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Break
                  </span>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Break
                  </span>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Break
                  </span>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Break
                  </span>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Break
                  </span>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                </td>
              </tr>

              <tr>
                <td className="align-middle">12:50 à 13:40</td>
                <td className="bg-light-gray"></td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Art
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Dance
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray"></td>
              </tr>

              <tr>
                <td className="align-middle">13:45 à 14:35</td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    English
                  </span>
                  <div className="margin-10px-top font-size14">1:00-2:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">1:00-2:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray"></td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    English
                  </span>
                  <div className="margin-10px-top font-size14">1:00-2:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Yoga
                  </span>
                  <div className="margin-10px-top font-size14">1:00-2:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>
              </tr>

              <tr>
                <td className="align-middle">14:40 à 15:30</td>
                <td className="bg-light-gray"></td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Art
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Dance
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray"></td>
              </tr>

              <tr>
                <td className="align-middle">15:35 à 16:25</td>
                <td className="bg-light-gray"></td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Art
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Dance
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                    Music
                  </span>
                  <div className="margin-10px-top font-size14">12:00-1:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
