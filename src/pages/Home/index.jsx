import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Slider } from '../../components/Slider'
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { SideMenu } from '../../components/SideMenu'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../services/api'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")


  const navigate = useNavigate()

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

 

  function handleDetails(id) {

    navigate(`/details/${id}`);
  }

  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      setDishes(response.data);
  }

  fetchDishes();
  }, [search])


   
  return (
    <Container>
      <SideMenu handleMenu={handleMenu} menuisopen={menuIsOpen.toString(menuIsOpen.toString())} search={setSearch}/>
      <Header handleMenu={handleMenu} search={setSearch}/>
      <Content>
      <Banner />

        <Slider title={"Refeições"} content={
          dishes.map((dishes) => {
            if (dishes.category === "Refeição") {
              return (
                <Card
                  src={`https://food-explorer-api-6wpc.onrender.com/files/dishfiles/${dishes.image}`}
                  onClick={() => handleDetails(dishes.id)}
                  key={String(dishes.id)}
                  data={dishes}
                />)
            }
          })
        }
        />

        <Slider title={"Bebidas"} content={
          dishes.map((dishes) => {
            if (dishes.category === "Bebida") {
              return (
                <Card
                  src={`https://food-explorer-api-6wpc.onrender.com/files/dishfiles/${dishes.image}`}
                  onClick={() => handleDetails(dishes.id)}
                  key={String(dishes.id)}
                  data={dishes}
                />)
            }
          })
        }
        />

        <Slider title={"Sobremesas"} content={
          dishes.map((dishes) => {
            if (dishes.category === "Sobremesa") {
              return (
                <Card
                  src={`https://food-explorer-api-6wpc.onrender.com/files/dishfiles/${dishes.image}`}
                  onClick={() => handleDetails(dishes.id)}
                  key={String(dishes.id)}
                  data={dishes}
                />)
            }
          })
        }
        />
      </ Content>

      <Footer />
    </Container>
  )
}


