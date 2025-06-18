import Iconify from "src/components/iconify";
import aiStyles from "src/theme/ai-modern-styles";
import styled from "styled-components";
import tabsData from "./tabs.json";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Card,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const CONSTANTS = {
  LINE_COLORS: {
    DEFAULT: "rgba(99, 102, 241, 0.3)",
    ACTIVE: "rgba(99, 102, 241, 0.8)",
  },
  ANIMATION_INTERVAL: 3000,
};

const StyledTreeNode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const NodeTemplate = ({ nodeData }) => (
  <Card
    sx={{
      p: 2,
      width: "100px",
      height: "100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      borderRadius: 3,
      background:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        animation: `${aiStyles.glowPulse} 2s ease-in-out infinite`,
        border: "1px solid rgba(99, 102, 241, 0.5)",
        background:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))",
        cursor: "pointer",

        "&::before": {
          opacity: 1,
        },
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
        transition: "left 0.5s",
        opacity: 0,
      },
      "&:hover::before": {
        left: "100%",
        opacity: 1,
      },
    }}
  >
    <Iconify
      icon={nodeData.icon || "material-symbols:smart-toy"}
      width={24}
      height={24}
      sx={{
        color: "primary.main",
        filter: "drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3))",
      }}
    />
    <Typography
      variant="body2"
      sx={{
        textAlign: "center",
        fontSize: "0.65rem",
        fontWeight: 600,
        color: "text.primary",
        lineHeight: 1.2,
      }}
    >
      {nodeData.title}
    </Typography>
  </Card>
);

export default function MarketingServicesInclude() {
  const [lineColor, setLineColor] = useState(CONSTANTS.LINE_COLORS.DEFAULT);
  const [selectedTab, setSelectedTab] = useState(0);
  const [bgImage, setBgImage] = useState("/assets/Illustration_1.png");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setBgImage(tabsData[newValue].bgImage);
  };

  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setLineColor((prevColor) =>
        prevColor === CONSTANTS.LINE_COLORS.DEFAULT
          ? CONSTANTS.LINE_COLORS.ACTIVE
          : CONSTANTS.LINE_COLORS.DEFAULT,
      );
    }, CONSTANTS.ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const treeData = useMemo(() => {
    const currentServices = tabsData[selectedTab].services;

    const createNode = (index) => ({
      ...currentServices[index],
      children: [],
    });

    const finalNode = createNode(4);
    const meetNode = createNode(5);
    const objectionsNode = {
      ...createNode(3),
      children: [meetNode],
    };
    const outreachNode = {
      ...createNode(2),
      children: [finalNode],
    };
    const secondNode = {
      ...createNode(1),
      children: [outreachNode, objectionsNode],
    };

    return {
      ...createNode(0),
      children: [secondNode],
    };
  }, [selectedTab]);

  const renderTree = useMemo(() => {
    const render = (node) => (
      <TreeNode
        key={node.id}
        label={
          <StyledTreeNode>
            <NodeTemplate nodeData={node} />
          </StyledTreeNode>
        }
      >
        {node.children?.map(render)}
      </TreeNode>
    );
    return render;
  }, []);

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg,
          #0a0a0a 0%,
          #1a1a2e 25%,
          #16213e 50%,
          #0f3460 75%,
          #533483 100%)`,
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: aiStyles.backgrounds.radialOverlay,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          right: "15%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
          animation: `${aiStyles.floatAnimation} 8s ease-in-out infinite`,
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1))`,
          animation: `${aiStyles.floatAnimation} 6s ease-in-out infinite`,
          filter: "blur(30px)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 15 },
          position: "relative",
          zIndex: 2,
        }}
      >
        {tabsData.map((tab, index) => (
          <img
            key={index}
            style={{ display: "none" }}
            src={tab.bgImage}
            alt=""
          />
        ))}

        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            animation: `${aiStyles.slideInUp} 1s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 800,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              fontSize: { xs: 32, sm: 40, md: 48 },
            }}
          >
            Intelligent Process
            <br />
            Automation
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
            animation: `${aiStyles.slideInUp} 1s ease-out 0.2s both`,
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
              },
              "& .MuiTabs-scroller": {
                "& .MuiTabs-flexContainer": {
                  gap: 2,
                },
              },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                label={tab.title}
                sx={{
                  minHeight: 48,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&.Mui-selected": {
                    color: "primary.main",
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                  },
                  "&:hover": {
                    color: "primary.main",
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
                    transform: "translateY(2px)",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                animation: `${aiStyles.slideInUp} 1s ease-out 0.4s both`,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  {tabsData[selectedTab].title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: "1.1rem",
                  }}
                >
                  {tabsData[selectedTab].description}
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  height: { xs: 250, md: 350 },
                  borderRadius: 4,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${bgImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: "brightness(1.1) contrast(1.1)",
                    zIndex: 1,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      linear-gradient(45deg, transparent 40%, rgba(99, 102, 241, 0.02) 50%, transparent 60%),
                      linear-gradient(-45deg, transparent 40%, rgba(139, 92, 246, 0.02) 50%, transparent 60%)
                    `,
                    animation: `${aiStyles.shimmer} 4s ease-in-out infinite`,
                    zIndex: 2,
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                animation: `${aiStyles.slideInUp} 1s ease-out 0.6s both`,
                p: 3,
                borderRadius: 4,
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Tree
                lineWidth="3px"
                lineColor={lineColor}
                lineBorderRadius="15px"
                lineStyle="solid"
                nodePadding="0.5rem"
                label={
                  <StyledTreeNode>
                    <NodeTemplate nodeData={treeData} />
                  </StyledTreeNode>
                }
              >
                {treeData.children.map(renderTree)}
              </Tree>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
