import React from "react";

interface ProfileCardProps {
  id?: number | string;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  description,
  imageUrl,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 10,
        borderRadius: 6,
        width: 280,
        marginBottom: 8,
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: 140,
            background: "#f3f3f3",
            borderRadius: 4,
          }}
        />
      )}
      <h3 style={{ margin: "8px 0 4px" }}>{name}</h3>
      <p style={{ margin: 0, color: "#444" }}>
        {description ?? "No description"}
      </p>
      <small style={{ display: "block", marginTop: 8, color: "#888" }}>
        ID: {id ?? "—"}
      </small>
    </div>
  );
};

export default ProfileCard;
