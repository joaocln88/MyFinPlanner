import useSWR from "swr";

async function fetcherAPI(key) {
  const response = await fetch(key);
  const result = await response.json();
  return result;
}

export default function status() {
  const { isLoading, data } = useSWR("/api/v1/status", fetcherAPI, {
    refreshInterval: 2000,
  });

  return (
    <>
      <h1>Status</h1>
      {isLoading ? (
        "Carregando..."
      ) : (
        <>
          <UpdatedAt data={data} />
          <DatabaseStatus data={data} />
        </>
      )}
    </>
  );
}

function UpdatedAt({ data }) {
  const updatedAtText = new Date(data.updated_at).toLocaleString();

  return <div>Ultima atualização: {updatedAtText}</div>;
}

function DatabaseStatus({ data }) {
  return (
    <>
      <div>Versão da base de dados: {data.dependencies.database.version}</div>
      <div>
        Máximo de conexões: {data.dependencies.database.max_connections}
      </div>
      <div>
        Conexões abertas: {data.dependencies.database.opened_connections}
      </div>
    </>
  );
}
