import React from "react";
import StarIcon from "@material-ui/icons/Star";

const Review = () => {
  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2 style={{ color: "#406394" }}>
        145 รีวิว{" "}
        <span style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>
          4.8/5
        </span>
      </h2>
      <div
        style={{
          background: "#F7FAFC",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>
          บริการยอดเยี่ยม ทำเลดีมาก ประทับใจมากครับ ดีมาก
          เหมาะสมกับการทำงานเป็นอย่างมาก
        </p>
        <div style={{ marginTop: 10 }}>
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
        </div>
      </div>
      <div
        style={{
          background: "#F7FAFC",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>
          พนักงานบริกรให้บริการได้ประทับใจมาก สุภาพ เรียบร้อย เอาใจใส่
          ให้คำแนะนำในการเข้าพัก และจดจำลูกค้าได้
          จำได้กระทั่งว่าเราชอบรับประทานอาหารแบบไหน มีรสนิยมการใช้ชีวิตอย่างไร
          ชอบนั่งโต๊ะตัวไหน อาหารเยี่ยม บรรยากาศผ่อนคลายน่าทำงาน ดีมาก ๆ เลยครับ
        </p>
        <div style={{ marginTop: 10 }}>
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
          <StarIcon style={{ color: "#FF9A16" }} />
        </div>
      </div>
    </div>
  );
};

export default Review;
