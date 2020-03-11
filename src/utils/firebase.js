import { db } from "../firebase";

export const getDispesas = async () => {
  const response = db.collection("dispesas");
  const data = await response.get();
  const docs = data.docs.map(doc => {
    return {
      id: doc.id,
      valor: doc.data().valor,
      descricao: doc.data().descricao,
      data: doc.data().data,
      pago: doc.data().pago,
      rs: doc.data().rs
    };
  });

  return docs;
};

export const deleteDispesas = e => {
  db.collection("dispesas")
    .doc(e)
    .delete();

  getDispesas();
};
