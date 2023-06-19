import Components from "@components";

export default function Conversation() {
  const messages = [
    {
      id: 1,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Merhaba, naber? Nasılsın?",
      date: "2013-11-18T11:54:00+08:00",
      avatar: "",
    },
    {
      id: 2,
      userID: 2,
      name: "Lorem",
      surname: "Ipsum",
      message: "Teşekkürler, sen nasılsın?",
      date: "2013-11-18T11:55:00+08:00",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 3,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Ben de iyiyim, teşekkürler.",
      date: "2013-11-18T11:56:00+08:00",
      avatar: "",
    },
    {
      id: 4,
      userID: 2,
      name: "Lorem",
      surname: "Ipsum",
      message: "Bugün hava çok güzel",
      date: "2013-11-18T11:57:00+08:00",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 5,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Evet, hava gerçekten çok güzel.",
      date: "2013-11-18T11:58:00+08:00",
      avatar: "",
    },
    {
      id: 1,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Merhaba, naber? Nasılsın?",
      date: "2013-11-18T11:54:00+08:00",
      avatar: "",
    },
    {
      id: 2,
      userID: 2,
      name: "Lorem",
      surname: "Ipsum",
      message: "Teşekkürler, sen nasılsın?",
      date: "2013-11-18T11:55:00+08:00",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 3,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Ben de iyiyim, teşekkürler.",
      date: "2013-11-18T11:56:00+08:00",
      avatar: "",
    },
    {
      id: 4,
      userID: 2,
      name: "Lorem",
      surname: "Ipsum",
      message: "Bugün hava çok güzel",
      date: "2013-11-18T11:57:00+08:00",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 5,
      userID: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Evet, hava gerçekten çok güzel.",
      date: "2013-11-18T11:58:00+08:00",
      avatar: "",
    },
  ];

  return (
    <Components.Box
      sx={{
        mt: 3,
      }}
    >
      {messages.map((message) => {
        return (
          <Components.Box
            sx={{
              display: "flex",
              flexDirection: message.userID === 1 ? "row-reverse" : "row",
              gap: "1rem",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              marginBottom: "1rem",
            }}
          >
            <Components.Box>
              <Components.Avatar variant="rounded" src={message.avatar} />
            </Components.Box>
            <Components.Card
              sx={{
                maxWidth: "50%",
                boxShadow: "none",
                backgroundColor: message.userID === 1 ? "#6b8afd" : "#4a4d54",
                color: "#fff",
                borderRadius: "1rem",
                borderBottomLeftRadius: message.userID === 1 ? "1rem" : "0",
                borderBottomRightRadius: message.userID === 1 ? "0" : "1rem",
              }}
            >
              <Components.CardHeader
                title={
                  <Components.Typography variant="body2">
                    {message.name} {message.surname}
                  </Components.Typography>
                }
                subheader={
                  <Components.Typography
                    variant="caption"
                    sx={{
                      color: "#d1d1d1",
                    }}
                  >
                    {Components.dateFormatter(message.date)}
                  </Components.Typography>
                }
              />
              <Components.CardContent>
                <Components.Typography variant="body2" component="p">
                  {message.message}
                </Components.Typography>
              </Components.CardContent>
            </Components.Card>
          </Components.Box>
        );
      })}
    </Components.Box>
  );
}
