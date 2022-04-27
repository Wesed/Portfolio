import React from "react";
import UserItem from './UserItem';

const UserWork = ({color}) => {
  return (
    <>
      <UserItem
        title="Animaly Petshop"
        description="Sistema web para gerenciamento de Pet Shops"
        company="Freelancer"
        type="Freelance"
        date="Março 2022 - Atualmente"
        color={color}
      />

      <UserItem
        title="Analista de suporte"
        description="Auxiliar na migração de sistemas e treinar funcionários"
        company="Raízen"
        type="Tercerizado"
        date="Março 2022"
        color={color}
      />

      <UserItem
        title="Dogs"
        description="Rede social fictícia para cães"
        company="Projeto pessoal"
        type="Estudo"
        date="Março 2022"
        color={color}
      />

      <UserItem
        title="Lalakids & Teen"
        description="Loja de roupas infanto-juvenil"
        company="Freelancer"
        type="Freelance"
        date="Junho 2021"
        color={color}
      />

      <UserItem
        title="Suporte técnico"
        description="Software para gestão de hotelarias"
        company="InnManager"
        type="Estágio"
        date="Fevereiro / Junho - 2018"
        color={color}
      />

      <UserItem
        title="Trabalho Voluntário"
        description="Arrecadação de alimentos"
        company="Unifae - Bixo Bom"
        type="Voluntario"
        date="2016 - 2019"
        color={color}
      />

      <UserItem
        title="Trabalho Voluntário"
        description="Arrecadação de alimentos"
        company="Projeto Guri"
        type="Voluntario"
        date="Fevereiro / Dezembro - 2015"
        color={color}
      />
    </>
  );
};

export default UserWork;
