import {
  AnimatedSkeleton,
  SkeletonButton,
  SkeletonContainer,
  SkeletonImage,
  SkeletonText,
} from "./ProductSkeleton.styled";

const ProductSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonImage as={AnimatedSkeleton} />
      <SkeletonText as={AnimatedSkeleton} />
      <SkeletonText as={AnimatedSkeleton} />
      <SkeletonButton as={AnimatedSkeleton} />
    </SkeletonContainer>
  );
};

export default ProductSkeleton;
