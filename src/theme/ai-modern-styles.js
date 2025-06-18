import { keyframes } from "@mui/system";

export const animations = {
  floatAnimation: keyframes`
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  `,

  slideInUp: keyframes`
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,

  slideInLeft: keyframes`
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,

  slideInRight: keyframes`
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,

  glowPulse: keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(139, 92, 246, 0.1); }
    50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(139, 92, 246, 0.3); }
  `,

  shimmer: keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  `,
};

export const backgrounds = {
  aiGradient: `linear-gradient(135deg,
    #0a0a0a 0%,
    #1a1a2e 25%,
    #16213e 50%,
    #0f3460 75%,
    #533483 100%)`,

  radialOverlay: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)`,

  glassMorphism: {
    primary:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
    secondary:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    accent:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))",
  },

  shimmerOverlay: `
    linear-gradient(45deg, transparent 40%, rgba(99, 102, 241, 0.02) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(139, 92, 246, 0.02) 50%, transparent 60%)
  `,

  gradientText: {
    primary: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
    secondary: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
    accent: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
};

export const floatingElements = {
  primary: (top = "8%", right = "15%", size = 120) => ({
    position: "absolute",
    top,
    right,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
    animation: `${animations.floatAnimation} 8s ease-in-out infinite`,
    filter: "blur(40px)",
    zIndex: 1,
  }),

  secondary: (bottom = "15%", left = "10%", size = 80) => ({
    position: "absolute",
    bottom,
    left,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1))`,
    animation: `${animations.floatAnimation} 6s ease-in-out infinite`,
    filter: "blur(30px)",
    zIndex: 1,
  }),

  sparkle: (top = -5, right = -5, size = 12) => ({
    position: "absolute",
    top,
    right,
    width: size,
    height: size,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent)",
    animation: `${animations.floatAnimation} 3s ease-in-out infinite`,
  }),
};

export const containers = {
  aiPage: (minHeight = "100vh") => ({
    background: backgrounds.aiGradient,
    position: "relative",
    overflow: "hidden",
    minHeight,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: backgrounds.radialOverlay,
      zIndex: 0,
    },
  }),

  glassContainer: (padding = { xs: 4, md: 6 }) => ({
    background: backgrounds.glassMorphism.primary,
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
    p: padding,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  }),

  enhancedGlassContainer: (padding = { xs: 4, md: 6 }) => ({
    ...containers.glassContainer(padding),
    "&:hover": {
      transform: "translateY(-2px)",
      border: "1px solid rgba(99, 102, 241, 0.3)",
    },
  }),
};

export const typography = {
  gradientHeading: (gradient = backgrounds.gradientText.primary) => ({
    cursor: "default",
    fontWeight: 800,
    background: gradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.2,
  }),

  aiPageTitle: (fontSize = { xs: 32, sm: 40, md: 48 }) => ({
    ...typography.gradientHeading(),
    fontSize,
    mb: 3,
  }),

  sectionSubtitle: {
    cursor: "default",
    color: "text.secondary",
    lineHeight: 1.6,
    fontWeight: 400,
  },
};

export const components = {
  aiChip: () => ({
    mb: 3,
    px: 3,
    py: 0.5,
    background:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    color: "primary.main",
    fontWeight: 600,
    fontSize: "0.75rem",
    letterSpacing: 1,
  }),

  enhancedCard: {
    background: backgrounds.glassMorphism.primary,
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 3,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      background: backgrounds.glassMorphism.accent,
    },
  },

  shimmerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: backgrounds.shimmerOverlay,
    animation: `${animations.shimmer} 4s ease-in-out infinite`,
    pointerEvents: "none",
  },

  // Gradient borders
  gradientBorder: {
    top: {
      height: 1,
      background:
        "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.5) 50%, transparent 100%)",
    },
    bottom: {
      height: 1,
      background:
        "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)",
    },
  },
};

export const animationUtils = {
  staggeredAnimation:
    (animation, baseDelay = 0, indexMultiplier = 0.1) =>
    (index) => ({
      animation: `${animation} 1s ease-out ${baseDelay + index * indexMultiplier}s both`,
    }),

  heroAnimation: {
    animation: `${animations.slideInUp} 1s ease-out`,
  },

  leftSlideAnimation: (delay = 0.2) => ({
    animation: `${animations.slideInLeft} 1s ease-out ${delay}s both`,
  }),

  rightSlideAnimation: (delay = 0.4) => ({
    animation: `${animations.slideInRight} 1s ease-out ${delay}s both`,
  }),
};

export const layouts = {
  mainContainer: (maxWidth = "lg") => ({
    maxWidth,
    position: "relative",
    zIndex: 2,
  }),

  heroSection: (marginBottom = 8) => ({
    textAlign: "center",
    mb: marginBottom,
    ...animationUtils.heroAnimation,
  }),

  twoColumnLayout: {
    container: {
      spacing: 6,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    leftColumn: { xs: 12, md: 6, lg: 6 },
    rightColumn: { xs: 12, md: 6, lg: 6 },
  },
};

export default {
  animations,
  backgrounds,
  floatingElements,
  containers,
  typography,
  components,
  animationUtils,
  layouts,
};
