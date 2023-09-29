import { useLoading, BallTriangle } from "@agney/react-loading";

function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="10%" />,
  });

  return (
    <section {...containerProps} 
    style={{ 
        width: "100%", 
        height: "100%",
        display: "flex",
        justifyContent: "center",
    }}>
      {indicatorEl}
    </section>
  );
}

export default Loader;
