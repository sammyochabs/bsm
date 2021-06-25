import React from "react";
import { Col } from "react-bootstrap";
import Service from "./Service";

export default function Services() {
  return (
    <Col className={`mt-5`}>
      <Service
        head={"Fashion Production and Development"}
        content={`patternmaking, samples, grading and marking, cutting, sewing, fabric
          sourcing, dyeing, screen printing, embroidery, sublimation, budgeting,
          fitting, sourcing, tech drawings, production patterns, finishing, and
          fulfillment.`}
      />
      <Service
        head={`Creative Consulting`}
        content={`product research, product development, branding, marketing, content creation.`}
      />
      <Service
        head={`Graphic Design`}
        content={`logos, 3d product visualization, creative/ art direction, illustration, webdesign, look books and editorial, illustration, custom patterns, motion graphics, story boarding, style frames, animation, and web design.`}
      />
      <Service
        head={`Industrial Design`}
        content={`logos, 3d product visualization, creative/ art direction, illustration, webdesign, look books and editorial, illustration, custom patterns, motion graphics, story boarding, style frames, animation, and web design.        `}
      />
      <Service
        head={`Photography & Film`}
        content={`look at books (video+photo), product photography.`}
      />
    </Col>
  );
}
