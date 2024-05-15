export interface VideoType {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  videos: Videos;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface Videos {
  large: Large;
  medium: Medium;
  small: Small;
  tiny: Tiny;
}

export interface Large {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Small {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Tiny {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}
