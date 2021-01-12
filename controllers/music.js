import { getAllMusic, getMusicResourceById } from '../models/music.js';

export const listMusic = async (request, response, next) => {
  const musicList = await getAllMusic();
  const music = JSON.parse(musicList);

  response.statusCode = 200;
  response.send(JSON.stringify(music));
};

export const getMusicById = async (request, response, next) => {
  const {
    params: { id },
  } = request;

  const musicResource = await getMusicResourceById(id);

  if (musicResource) {
    return response.status(200).send(JSON.stringify(musicResource));
  } else {
    return response.status(404).send(
      JSON.stringify({
        message: 'Error: Music resource not found.',
      }),
    );
  }
};

export const createMusic = async (request, response) => {
  const { body } = request;
  console.log(body);
};
