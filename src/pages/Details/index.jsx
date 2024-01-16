import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonBack } from '../../components/ButtonBack'
import { DescriptionSection } from '../../components/DescriptionSection'
import { useState, useEffect } from "react";
import { SideMenu } from '../../components/SideMenu'
import { api } from "../../services/api";
import { useParams } from 'react-router-dom'
export function Details() {
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
          <DescriptionSection src={`https://food-explorer-api-zmmj.onrender.com/files/dishfiles/${data.image}`} data={data} />
        }
      </Content>
      <Footer />
    </Container>
  )
}
