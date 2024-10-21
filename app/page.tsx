
import Hero from "./comnents/hero";
import RiwayatPendidikan from "./comnents/riwayatpendidikan";
import RiwayatPekerjaan from "./comnents/riwayatpekerjaan";
import "./insho-style.css";
import FavColor from "./comnents/favColor";
import Soal from "./comnents/soal";
 export default function MyApp() {
  return(
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor/>
      <Soal/>
    </section>
  );
}