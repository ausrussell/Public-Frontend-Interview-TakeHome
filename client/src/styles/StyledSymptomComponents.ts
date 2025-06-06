import { styled, Box, Card, CardActionArea } from "@mui/material";

export const StyledSymptomBox = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isSelected" && prop !== "expandedIndex" && prop !== "offset",
})(
  (props: {
    isSelected: boolean;
    expandedIndex: number | null;
    offset: number;
  }) => {
    const { isSelected, expandedIndex, offset } = props;
    return {
      width: "100%",
      margin: "8px 0",
      zIndex: isSelected ? 10 : 1,
      position: "relative",
      height: isSelected ? "100%" : "auto",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      backgroundColor: "rgba(255, 255, 255, 0.78)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      opacity: expandedIndex === null || isSelected ? 0.78 : 0,
      pointerEvents: expandedIndex === null || isSelected ? "auto" : "none",
    //   borderRadius: isSelected ? 2 : 2,
      transform:
        isSelected && offset !== 0 ? `translateY(-${offset}px)` : "none",
      "&:hover":
        expandedIndex === null || !isSelected
          ? {
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              transform: isSelected
                ? `translateY(-${offset}px)`
                : "translateY(-2px) scale(1.02)",
              color: "#333",
              opacity: .9
            }
          : undefined,
    };
  }
);

export const StyledSymptomCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})((props: { isSelected: boolean }) => {
  const { isSelected } = props;
  return {
    width: "100%",
    height: isSelected ? "100%" : "auto",
    boxShadow: "none",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "visible",
  };
});

export const StyledCardActionArea = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})((props: { isSelected: boolean }) => {
  const { isSelected } = props;
  return {
    width: "100%",
    height: isSelected ? "100%" : "auto",
    boxShadow: "none",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "visible",
  };
});
