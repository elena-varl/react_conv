import Day1 from "../assets/day1.jpg";
import Day2 from "../assets/day2.jpg";
import Day3 from "../assets/day3.jpg";
import Day4 from "../assets/day4.jpg";
import Day5 from "../assets/day5.jpg";

function CustomFooter() {
    const images = [Day1, Day2, Day3, Day4, Day5]; // Запихиваем все наши картинки в массив

    const randomImg = images[Math.floor(Math.random() * 5)];
    // Берём из массива картинку с рандомным индексом (до 5, т.к. у нас 5 элементов в массиве)

    return (
        <footer>
            <div id="img" className="img">
                <img src={randomImg} alt="" />
            </div>
        </footer>
    );
}

export default CustomFooter;
