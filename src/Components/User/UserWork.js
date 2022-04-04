import React from "react";
import UserItem from './UserItem';

const UserWork = ({color}) => {
  return (
    <>
      <UserItem
        color={color}
        title="Animaly Petshop"
        description="Sistema web para gerenciamento de Pet Shops"
        company="Freelancer"
        type="Freelance"
        date="Março 2022 - Atualmente"
      />

      <UserItem
        color={color}
        title="Dogs"
        description="Rede social fictícia para cães"
        company="Projeto pessoal"
        type="Estudo"
        date="Março 2022"
      />

      <UserItem
        color={color}
        title="Lalakids & Teen"
        description="Loja de roupas infanto-juvenil"
        company="Freelancer"
        type="Freelance"
        date="Junho 2021"
      />

      <UserItem
        color={color}
        title="Suporte técnico"
        description="Software para gestão de hotelarias"
        company="InnManager"
        type="Estágio"
        date="Fevereiro / Junho - 2018"
      />

      <UserItem
        color={color}
        title="Freelance Voluntário"
        description="Arrecadação de alimentos"
        company="Bixo Bom"
        type="Voluntario"
        date="2016 - 2019"
      />

      <UserItem
        color={color}
        title="Freelance Voluntário"
        description="Arrecadação de alimentos"
        company="Projeto Guri"
        type="Voluntario"
        date="Janeiro / Dezembro - 2015"
      />

    </>
  );
};

export default UserWork;
