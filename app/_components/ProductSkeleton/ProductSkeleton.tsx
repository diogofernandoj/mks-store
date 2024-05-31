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
      <SkeletonImage as={AnimatedSkeleton} data-testid="skeleton-image" />
      <SkeletonText as={AnimatedSkeleton} data-testid="skeleton-text" />
      <SkeletonText as={AnimatedSkeleton} data-testid="skeleton-text" />
      <SkeletonButton as={AnimatedSkeleton} data-testid="skeleton-button" />
    </SkeletonContainer>
  );
};

export default ProductSkeleton;
