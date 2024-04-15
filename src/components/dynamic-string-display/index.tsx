/**
 * 字符串动态展示
 * @param content 字符串数组
 * @constructor
 */
import {useEffect, useState} from "react";

const DynamicStringDisplay = ({content}: {content: string[]}) => {

    const [showIndex, setShowIndex] = useState<number>(0);
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const flag = current + 1 === content[showIndex].length;
        const timeoutId = setTimeout(() => {
            setCurrent(pre => (pre + 1) % content[showIndex].length);
            if (flag) {
                setShowIndex(pre => (pre + 1) % content.length)
            }
        }, flag ? 1500 : 200);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [current, showIndex])

    return (
        <div style={{ fontSize: '1.5rem', lineHeight: '1.5rem', marginBottom: '1rem', whiteSpace: 'pre-wrap'}}>
            <span>{content[showIndex].substring(0, current + 1)}</span>
            {content[showIndex].length >= current + 2 && <RandomTextAnimation/>}
        </div>
    )
};

const characters = '$%^&#!()_+-=|\\\"\'><?/,.[]{}*';

/**
 * 随机文字动画
 * @constructor
 */
const RandomTextAnimation = () => {
    const [randomText, setRandomText] = useState('');
    const [randomColor, setRandomColor] = useState('');

    useEffect(() => {

        const animationInterval = setInterval(() => {
            const newText = Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
            setRandomText(newText);

            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            setRandomColor(randomColor);
        }, 150);

        return () => clearInterval(animationInterval);
    }, []);

    return (
        <span style={{ color: randomColor}}>
      {randomText}
    </span>
    );
};

export default DynamicStringDisplay;