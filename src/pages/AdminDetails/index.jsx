import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonBack } from '../../components/ButtonBack'
import { useParams } from 'react-router-dom'
import { DescriptionSection } from '../../components/DescriptionSection'
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { SideMenu } from '../../components/SideMenu'

export function AdminDetails() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState([])
  const params = useParams()

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }


  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)


    }

    fetchNotes()
  }, [])
  return (

    <Container>
      <SideMenu handleMenu={handleMenu} menuisopen={menuIsOpen.toString()} />
      <Header handleMenu={handleMenu} />
      <ButtonBack />
      <Content>
        {data.image &&
          <DescriptionSection isAdmin src={`https://food-explorer-api-zmmj.onrender.com/files/dishfiles/${dishes.image}`} data={data} />
        }
      </Content>
      <Footer />

    </Container>
  )
}
