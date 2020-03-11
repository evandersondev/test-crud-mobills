/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";

import { db } from "../../firebase";

export default function Home() {
  const dispesas = useSelector(state => state.dispesas);
  const dispatch = useDispatch();

  const columns = [
    { title: "Descricao", field: "descricao" },
    { title: "Data", field: "data", type: "date" },
    {
      title: "",
      field: "rs",
      editable: "never",
      initialEditValue: "R$",
      type: "numeric"
    },
    { title: "Valor", field: "valor", type: "numeric" },
    {
      title: "Pago",
      field: "pago",
      lookup: { 10: "Sim", 11: "Nao" }
    }
  ];

  // Create
  const addDispesas = e => {
    db.collection("dispesas").add({
      ...e,
      data: new Date().getTime()
    });
    getDispesas();
  };

  const addDispesasAction = dispesas => {
    return { type: "GET_DISPESA", dispesas };
  };

  // Delete
  const deleteDispesas = e => {
    db.collection("dispesas")
      .doc(e)
      .delete();

    getDispesas();
  };

  // Update
  const updateDispesas = e => {
    db.collection("dispesas")
      .doc(e.id)
      .update({
        ...e,
        data: new Date(e.data).getTime()
      });

    getDispesas();
  };

  // Read
  const getDispesas = async () => {
    const response = db.collection("dispesas");
    const data = await response.get();
    const docs = data.docs.map(doc => {
      return {
        id: doc.id,
        valor: doc.data().valor,
        descricao: doc.data().descricao,
        data: new Date(doc.data().data).toLocaleDateString("pt-BR"), // doc.data().data,
        pago: doc.data().pago,
        rs: doc.data().rs
      };
    });

    dispatch(addDispesasAction(docs));
    return;
  };

  useEffect(() => {
    getDispesas();
  }, []);

  // const convertMoney = money => {
  //   var real = money.toLocaleString("pt-br", {
  //     style: "currency",
  //     currency: "BRL"
  //   });
  //   return real;
  // };

  return (
    <Container style={{ marginTop: 60 }}>
      <MaterialTable
        style={{ padding: 30 }}
        title="Controle de Dispesas"
        columns={columns}
        data={dispesas}
        editable={{
          onRowAdd: e =>
            new Promise(resolve => {
              setTimeout(() => {
                addDispesas(e);
                resolve();
              }, 1000);
            }),
          onRowUpdate: e =>
            new Promise(resolve => {
              setTimeout(() => {
                updateDispesas(e);
                resolve();
              }, 1000);
            }),
          onRowDelete: e =>
            new Promise(resolve => {
              setTimeout(() => {
                deleteDispesas(e.id);
                resolve();
              }, 1000);
            })
        }}
      />
    </Container>
  );
}
