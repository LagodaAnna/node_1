const { editSong } = require("./songs");
const Service = require("../services/songs");

describe("EditSong controller", () => {
  const mock = jest.spyOn(Service, "editSongService");

  afterEach(() => {
    mock.mockReset();
  });

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

    mock.mockImplementation(() => editedSong);

    await editSong(req, res);

    expect(res.json).toHaveBeenCalled();
    expect(res.json.mock.calls[0][0]).toEqual(editedSong);
  });

  it('EditSong should return status 404 and message "Not found" if it gets unexisted id', async () => {
    const req = {
      params: { id: "634a8eb86db741d2d6d721ea" },
      body: { title: "Test name" },
    };
    const json = jest.fn();
    const res = {
      status: jest.fn(() => ({ json })),
    };

    mock.mockReturnValue(null);

    await editSong(req, res);

    expect(json).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalled();
    expect(json.mock.calls[0][0]).toEqual({ message: "Not found" });
    expect(res.status.mock.calls[0][0]).toEqual(404);
  });
});
