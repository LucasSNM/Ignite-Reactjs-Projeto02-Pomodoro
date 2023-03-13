import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator, CountdownButton } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <input id="task" type="text" placeholder="Dê um nome para o seu projeto"/>

          <label htmlFor="">durante</label>
          <input id="minutosRestantes" type="number" placeholder="- 0 +"/>

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <CountdownButton type="submit">
          <Play size={25}/> Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  );
}
