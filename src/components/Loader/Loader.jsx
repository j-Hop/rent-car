import {
  LoaderBody,
  LoaderCircle1,
  LoaderCircle2,
  LoaderLine,
  LoaderNeedle,
  LoaderSubline,
  LoaderWrapper,
  Loading,
} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderBody>
        <LoaderLine />
        <LoaderLine />
        <LoaderLine />
        <LoaderLine />
        <LoaderLine />
        <LoaderLine />
        <LoaderSubline />
        <LoaderSubline />
        <LoaderSubline />
        <LoaderSubline />
        <LoaderSubline />
        <LoaderCircle1>
          <LoaderCircle2 />
        </LoaderCircle1>
        <LoaderNeedle />
        <Loading>Loading</Loading>
      </LoaderBody>
    </LoaderWrapper>
  );
};