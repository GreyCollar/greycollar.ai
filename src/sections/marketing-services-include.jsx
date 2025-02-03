import Iconify from "src/components/iconify";
import styled from "styled-components";
import tabsData from "./tabs.json";

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
    DEFAULT: "#ccc",
    ACTIVE: "#4CAF50",
  },
  ANIMATION_INTERVAL: 2000,
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
      width: "90px",
      height: "90px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      borderRadius: 1,
      bgcolor: "background.paper",
      transition: "background-color 0.3s ease",
      "&:hover": {
        bgcolor: "grey.600",
        cursor: "pointer",
      },
    }}
  >
    <Iconify icon={nodeData.icon} width={18} height={18} />
    <Typography
      variant="body2"
      sx={{
        textAlign: "center",
        fontSize: "0.6rem",
        fontWeight: "medium",
      }}
    >
      {nodeData.title}
    </Typography>
  </Card>
);

export default function MarketingServicesInclude() {
  const [lineColor, setLineColor] = useState(CONSTANTS.LINE_COLORS.DEFAULT);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
    <Container sx={{ pt: { xs: 5, md: 10 }, pb: { xs: 10, md: 15 } }}>
      <Grid container spacing={3}>
        {/* Tabs */}
        <Grid xs={12} md={12} sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              {tabsData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.title}
                  sx={{
                    "&.Mui-selected": {
                      color: "primary.main",
                    },
                    "&:hover": {
                      color: "primary.main",
                      opacity: 0.7,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>

        {/* Content */}
        <Grid xs={12} md={12}>
          <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
            Our Marketing Services
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Work every lead and scale your sales activity. Automate your sales
            process and turn leads into customers on autopilot.
          </Typography>
        </Grid>

        {/* Bg */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              backgroundImage: "url(/assets/mark.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: { xs: 500, md: "100%" },
              width: "100%",
            }}
          />
        </Grid>

        {/* Tree */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tree
              lineWidth="2px"
              lineColor={lineColor}
              lineBorderRadius="10px"
              lineStyle="dashed"
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
  );
}
