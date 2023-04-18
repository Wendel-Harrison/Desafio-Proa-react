function Details() {
    return (
        <div className="flex justify-center my-7 items-center border-b pb-7">
            <div className="flex gap-3 mx-5 items-center">
                <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/svgs/vegano-green-icon___d50a3a256608558fb7a5b436f9296b04.svg" alt="Vegano" />

                <div>
                    <h2 className="text-xl font-semibold tracking-wide leading-5">Vegano</h2>
                    <p>sem componentes de origem animal</p>
                </div>
            </div>

            <div className="flex gap-3 px-20 mx-5 border-x ">
                <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/svgs/pata-green-icon___7274cf6f262f688870f559e8bb5cb80a.svg" alt="Cruelty-Free" />

                <div>
                    <h2 className="text-xl font-semibold tracking-wide leading-5">Cruelty-Free</h2>
                    <p>Não testado em animais</p>
                </div>
            </div>

            <div className="flex gap-3 mx-5 ">
                <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/svgs/gotas-green-icon___78ef54dd5aebcddbe542cb86e3d95971.svg" alt="Puro" />

                <div>
                    <h2 className="text-xl font-semibold tracking-wide leading-5">100% Puro</h2>
                    <p>óleos puros e naturais</p>
                </div>
            </div>

        </div>
    )
}

export default Details;