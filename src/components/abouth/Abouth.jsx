import './Abouth.css'

function Abouth() {

    return (
        <main>
            <section>
                <h1 className='abouth-title'>Про проект Super Herro</h1>

                <p className='abouth-text'>Тестовий проект який я пробував реалізувати </p>

                <h1 className='abouth-title-mini'>Я попробував тут таке:</h1>
                <ol className='abouth-list'>
                    <li className='abouth-text-item'>Запити на сервер (Api)</li>
                    <li className='abouth-text-item'>Пошук</li>
                    <li className='abouth-text-item'>React Router Dom (Кілька сторінок)</li>
                    <li className='abouth-text-item'>Пагінація</li>
                    <li className='abouth-text-item'>Фікс Scroll to Top</li>
                    <li className='abouth-text-item'>Зміна тем</li>
                </ol>
            </section>
        </main>
    )
}

export default Abouth