import React from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Card from "../../molecules/Card/Card";
import FilterBar from '../../molecules/FilterBar/FilterBar'
import MainTitle from "../../atoms/MainTitle/MainTitle";
import "./HomeContent.css"


const HomeContent =({texto, titulo, onClick, handleFilters, type, placeholder, value, onChange, data, filters}) =>{
    return(
        <main className="homeContent--container">
            <MainTitle texto={titulo} />
                <section>
                    <SearchBar 
                        texto={texto}
                        titulo={titulo}
                        onClick={onClick}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        />
                        <FilterBar 
                        filters={filters}
                        onClick={handleFilters} 
                        />
                </section>

                <section>
                    {data ? (
                        data.map(item => {
                            const {logo, company, position, postedAt, contract, location, languages, tools} = item;
                            return (
                        <Card 
                            logo={logo}
                            company={company}
                            position={position}
                            postedAt={postedAt}
                            contract={contract}
                            location={location}
                            languages={languages}
                            tools={tools}
                        />
                        )})
                    ) : (
                        <h2>Nenhuma vaga encontrada</h2>
                    )}
                </section>
        </main>

    )
}

export default HomeContent;