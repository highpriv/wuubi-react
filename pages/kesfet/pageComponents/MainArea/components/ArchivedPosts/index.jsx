import Components from "@components";

export default function ArchivedPosts() {
  const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Components.Box
      sx={{
        width: "100%",
      }}
    >
      {contentItems.map((item, index) => {
        return (
          <Components.Card
            sx={{
              margin: "1rem",
              boxSizing: "border-box",
            }}
          >
            <Components.CardHeader
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subheader="27 Mayıs 2023 12:00"
              avatar={
                <Components.Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                  }}
                />
              }
            />
            <Components.CardMedia
              component="img"
              height="250"
              sx={{
                objectFit: "cover",
                width: "100%",
              }}
              image="https://source.unsplash.com/random"
              alt="Paella dish"
            />
            <Components.CardContent>
              <Components.Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, nunc eget aliquam ultricies, nunc nunc ultrices
                sapien, vitae ultricies nunc nunc eget nunc. Sed consectetur,
                nunc eget aliquam ultricies.
              </Components.Typography>
            </Components.CardContent>
          </Components.Card>
        );
      })}
    </Components.Box>
  );
}
