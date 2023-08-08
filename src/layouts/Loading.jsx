import { GifLoading } from "../assets";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <img
        loading="lazy"
        src={GifLoading}
        style={{
          width: 120,
        }}
      />
      <div
        style={{
          marginTop: 20,
        }}
      >
        Loading ...
      </div>
    </div>
  );
};
