const { useState } = React;
const rootElement = document.getElementById('app');

function App() {
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('ghbdtn');  
    const [header, setHeader] = useState('Переводчик с "Ghbdtn"');

     
    const changelg = () => {
        setLanguage(prevLanguage => (prevLanguage === 'ghbdtn' ? 'russian' : 'ghbdtn'));
        setValue('');  
    };

    
    const translate = (text) => {
        if (language === 'ghbdtn') {
            return text.toLowerCase()
                .replace(/q/g, 'й')
                .replace(/w/g, 'ц')
                .replace(/e/g, 'у')
                .replace(/r/g, 'к')
                .replace(/t/g, 'е')
                .replace(/y/g, 'н')
                .replace(/u/g, 'г')
                .replace(/i/g, 'ш')
                .replace(/o/g, 'щ')
                .replace(/p/g, 'з')
                .replace(/\[/g, 'х')
                .replace(/\]/g, 'ъ')
                .replace(/a/g, 'ф')
                .replace(/s/g, 'ы')
                .replace(/d/g, 'в')
                .replace(/f/g, 'а')
                .replace(/g/g, 'п')
                .replace(/h/g, 'р')
                .replace(/j/g, 'о')
                .replace(/k/g, 'л')
                .replace(/l/g, 'д')
                .replace(/;/g, 'ж')
                .replace(/'/g, 'э')
                .replace(/z/g, 'я')
                .replace(/x/g, 'ч')
                .replace(/c/g, 'с')
                .replace(/v/g, 'м')
                .replace(/b/g, 'и')
                .replace(/n/g, 'т')
                .replace(/m/g, 'ь')
                .replace(/,/g, 'б')
                .replace(/\./g, 'ю');
        } else {
           
            return text.toLowerCase()  
            .replace(/й/g, 'q')
                .replace(/ц/g, 'w')
                .replace(/у/g, 'e')
                .replace(/к/g, 'r')
                .replace(/е/g, 't')
                .replace(/н/g, 'y')
                .replace(/г/g, 'u')
                .replace(/ш/g, 'i')
                .replace(/щ/g, 'o')
                .replace(/з/g, 'p')
                .replace(/х/g, '[')
                .replace(/ъ/g, ']')
                .replace(/ф/g, 'a')
                .replace(/ы/g, 's')
                .replace(/в/g, 'd')
                .replace(/а/g, 'f')
                .replace(/п/g, 'g')
                .replace(/р/g, 'h')
                .replace(/о/g, 'j')
                .replace(/л/g, 'k')
                .replace(/д/g, 'l')
                .replace(/ж/g, ';')
                .replace(/э/g, "'")
                .replace(/я/g, 'z')
                .replace(/ч/g, 'x')
                .replace(/с/g, 'c')
                .replace(/м/g, 'v')
                .replace(/и/g, 'b')
                .replace(/т/g, 'n')
                .replace(/ь/g, 'm')
                .replace(/б/g, ',')
                .replace(/ю/g, '.');
        }
    };

    return (
        <>
            <div className="App">
                <h2>{header}</h2>
                <form onSubmit={event => event.preventDefault()}>
                    <textarea 
                        placeholder="Введите текст..." 
                        type='text' 
                        value={value} 
                        onChange={event => setValue(event.target.value)} 
                        rows="5"
                    /><br/><br/>
                    <button type="button" onClick={changelg}>
                        Сменить язык 
                    </button>
                </form>
                
                <h2 className="translated">
                    {translate(value)} 
                </h2>
            </div>
            <br/>
        </>
    );
}

ReactDOM.createRoot(rootElement).render(<App />);
