import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const SkeletonContainer = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 200px;
`;

export const SkeletonElement = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
`;

export const SkeletonImage = styled(SkeletonElement)`
  height: 150px;
  margin-bottom: 16px;
`;

export const SkeletonText = styled(SkeletonElement)`
  height: 20px;
  width: 80%;
  margin-bottom: 8px;
`;

export const SkeletonButton = styled(SkeletonElement)`
  height: 40px;
  width: 100%;
  margin-top: 16px;
`;

export const SkeletonAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const AnimatedSkeleton = styled(SkeletonElement)`
  animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;
