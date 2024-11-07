import Grid from "@mui/material/Grid2";
import ListaAtividades from "./components/shared/ListaAtividades";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ListaAtividades />
      </Grid>
    </Grid>
  );
}
