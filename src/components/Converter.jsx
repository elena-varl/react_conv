import {useEffect, useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {BiTransfer} from "react-icons/bi";


let data = {
    'граммы': '1',
    'килограммы': '1000',
    'гранёный стакан': '200',
    'тонкий стакан': '250',
    'столовая ложка': '30',
    'чайная ложка': '5',
}; // Устанавливаем значения, исходя из того, что единица измерения - граммы

const options = [
    "граммы",
    "килограммы",
    "гранёный стакан",
    "тонкий стакан",
    "столовая ложка",
    "чайная ложка"
]; // Засовываем наши значения для селектов в массив, чтобы удобнее было работать с ними

function Converter() {
    const [value, setValue] = useState(0); // Введённое значение
    const [from, setFrom] = useState('килограммы'); // Из чего конвертируем
    const [to, setTo] = useState('граммы'); // Во что конвертируем
    const [result, setResult] = useState(0); // Результат вычислений

    function convert() {
        let inGrams = 0; // Вводим переменную для значения в граммах
        if (from === to) { // Если оба значения в селектах равны
            setResult(value); // То просто вписываем данные из поля ввода
        } else { // Если значения в селектах не совпадают
            if (from !== 'граммы') { // Если не равны граммам, то
                inGrams = value * data[from]; // Переводим выбранную тару в граммы
                setResult(Math.ceil((inGrams / data[to]) * 100) / 100); // Делим на значение и округляем до сотых
            } else { // Если значение в первом селекте граммы
                setResult(Math.ceil((value / data[to]) * 100) / 100); // Умножаем на значение и округляем до сотых
            }
        }
    }

    return (
        <div className="convert_wrapper">
            <div className="convert_block_item">
                <input
                    type="number"
                    id="val"
                    placeholder="введите значение..."
                    onChange={(e) => setValue(e.target.value)}
                />
                <Dropdown options={options}
                          onChange={(e) => setFrom(e.value)}
                          value={from} placeholder="Из"
                />
            </div>
            <div className="convert_block_item">
                <div className="convert_result">{result}</div>
                <Dropdown options={options}
                          onChange={(e) => setTo(e.value)}
                          value={to} placeholder="В"/>
            </div>
            <button onClick={convert}><BiTransfer /></button>
        </div>
    );
}

export default Converter;