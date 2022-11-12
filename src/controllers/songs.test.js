const { editSong } = require("./songs");
const Service = require("../services/songs");

describe("EditSong controller", () => {
  it("EditSong should return edited song if it gets valid data", async () => {
    const req = {
      params: { id: "634a8eb86db741d2d6d721e0" },
      body: { title: "Test name" },
    };
    const res = { json: jest.fn() };
    const editedSong = {
      title: req.body.title,
      singer: "Sofi Tukker",
      date: "2022-10-11T21:00:00.000+00:00",
      favorite: false,
    };

    jest.spyOn(Service, "editSongService").mockImplementation(() => editedSong);

    await editSong(req, res);

    expect(res.json.mock.calls[0][0]).toEqual(editedSong);
    expect(res.json.mock.calls[0]).toBeTruthy();
  });
});
