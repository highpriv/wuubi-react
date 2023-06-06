import Components from "../../Components";

export default function ExplorePage() {
  return (
    <div>
      <Components.Typography variant="h2" color="#e8e8e8" sx={{ p: 2 }}>
        Keşfet
      </Components.Typography>
      <Components.Box sx={{ p: 2 }}>
        <Components.RelatedGroups />
      </Components.Box>
    </div>
  );
}
