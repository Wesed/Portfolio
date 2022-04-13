import React from "react";
import UserItem from "./UserItem";

const UserFormacao = ({color}) => {
  return (
    <>
      <UserItem
        title="Engenharia de Software"
        description="Curso superior"
        company="Unifae"
        type="Graduacao"
        date="2016 - 2019"
        color={color}
      />

      <UserItem
        title="Scrum Fundamentals Certified"
        description="Certificação"
        company="ScrumStudy"
        type="Certificacao"
        date="Novembro - 2021"
        color={color}
      />

      <UserItem
        title="CSS SASS"
        description="Certificado"
        company="Origamid"
        type="Certificacao"
        date="Abril - 2022"
        color={color}
      />

      <UserItem
        title="ReactJs Completo"
        description="Certificado"
        company="Origamid"
        type="Certificacao"
        date="Março - 2022"
        color={color}
      />

      <UserItem
        title="Css Grid Layout"
        description="Certificado"
        company="Origamid"
        type="Certificacao"
        date="Janeiro - 2022"
        color={color}
      />

      <UserItem
        title="Css Flexbox"
        description="Certificado"
        company="Origamid"
        type="Certificacao"
        date="Maio - 2020"
        color={color}
      />
    </>
  );
};

export default UserFormacao;
