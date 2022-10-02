import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dataFoods from "./json/example_data.json";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

let day = [6, 0, 1, 2, 3, 4, 5];
let d = new Date();
let dayNum = day[d.getDay()];

function Content() {
  console.log(dataFoods);
  return (
    <Container>
      <Box
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {dataFoods.map((item, i) => {
            console.log(item);
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                  cursor: "pointer",
                }}
              >
                <Card
                  sx={{
                    width: 400,
                    height: 225,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <img
                          src={item?.profile_image_url}
                          style={{ width: 60, height: 60 }}
                        />
                      </Box>
                      <Box sx={{ width: "100%", paddingLeft: "1rem" }}>
                        <Typography
                          sx={{ fontSize: 18, textAlign: "left" }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item?.name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Typography
                            component={"span"}
                            variant={"body2"}
                            style={{
                              fontSize: 14,
                            }}
                            color="text.secondary"
                            gutterBottom
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                            <CalendarMonthIcon />
                            {item.operation_time[dayNum].time_close} -  {item.operation_time[dayNum].time_open}
                            </div>
                          </Typography>
                          <Typography
                            component={"span"}
                            variant={"body2"}
                            sx={{ fontSize: 16, color: "#134B8A" }}
                            color="text.secondary"
                            gutterBottom
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Brightness1Icon />
                              <div> {item?.rating}</div>
                            </div>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <ImageList cols={3}>
                        {item?.images.map((item, i) => {
                          return (
                            <ImageListItem key={i}>
                              <img
                                src={`${item}`}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: 120, height: 120 }}
                              />
                            </ImageListItem>
                          );
                        })}
                      </ImageList>
                    </Box>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Content;

const Container = styled(Paper)(() => ({
  marginLeft: "90px",
  borderRadius: "0px",
  backgroundColor: "#e0e0e0",
}));
