import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/roam-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, -.2, -1]} scale={40.67}>
          <group name="2ef80b1dfb734b42bd96b1da8449f9a9fbx" rotation={[Math.PI / 2, -.2, -.6]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="aiAreaLight4" position={[0.73, 3.85, 5.45]} rotation={[0, -0.02, 0]} scale={[4.25, 3.05, 2.24]} />
                <group name="room">
                  <group name="pCube10">
                    <mesh name="pCube10_tabel_wood_0" geometry={nodes.pCube10_tabel_wood_0.geometry} material={materials.tabel_wood} />
                  </group>
                  <group name="polySurface93" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh name="polySurface93_glass_0" geometry={nodes.polySurface93_glass_0.geometry} material={materials.glass} />
                  </group>
                  <group name="pCylinder2">
                    <mesh name="pCylinder2_cups_0" geometry={nodes.pCylinder2_cups_0.geometry} material={materials.cups} />
                  </group>
                  <group name="pCylinder3">
                    <mesh name="pCylinder3_black_0" geometry={nodes.pCylinder3_black_0.geometry} material={materials.black} />
                    <mesh name="pCylinder3_pink_emeshon_0" geometry={nodes.pCylinder3_pink_emeshon_0.geometry} material={materials.pink_emeshon} />
                  </group>
                  <group name="pCube35">
                    <mesh name="pCube35_white_0" geometry={nodes.pCube35_white_0.geometry} material={materials.white} />
                    <mesh name="pCube35_aiStandardSurface25_0" geometry={nodes.pCube35_aiStandardSurface25_0.geometry} material={materials.aiStandardSurface25} />
                  </group>
                  <group name="polySurface107" position={[0, 0, -0.09]}>
                    <mesh name="polySurface107_wall_poster_0" geometry={nodes.polySurface107_wall_poster_0.geometry} material={materials.wall_poster} />
                  </group>
                  <group name="pCylinder6">
                    <mesh name="pCylinder6_black_0" geometry={nodes.pCylinder6_black_0.geometry} material={materials.black} />
                    <mesh name="pCylinder6_blue_emeshon_0" geometry={nodes.pCylinder6_blue_emeshon_0.geometry} material={materials.blue_emeshon} />
                  </group>
                  <group name="pCube28">
                    <mesh name="pCube28_lambert1_0" geometry={nodes.pCube28_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  <group name="polySurface101" position={[-3.94, 1.11, 4.93]} rotation={[0, -0.66, 0]} scale={[1.1, 0.2, 1.1]}>
                    <mesh name="polySurface101_cups_0" geometry={nodes.polySurface101_cups_0.geometry} material={materials.cups} />
                  </group>
                  <group name="polySurface98">
                    <mesh name="polySurface98_aiStandardSurface10_0" geometry={nodes.polySurface98_aiStandardSurface10_0.geometry} material={materials.aiStandardSurface10} />
                  </group>
                  <group name="polySurface130">
                    <mesh name="polySurface130_sofa_0" geometry={nodes.polySurface130_sofa_0.geometry} material={materials.sofa} />
                  </group>
                  <group name="pCube186">
                    <mesh name="pCube186_boxes_0" geometry={nodes.pCube186_boxes_0.geometry} material={materials.boxes} />
                  </group>
                  <group name="pCylinder1">
                    <mesh name="pCylinder1_white_0" geometry={nodes.pCylinder1_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCube167">
                    <mesh name="pCube167_switches_0" geometry={nodes.pCube167_switches_0.geometry} material={materials.switches} />
                  </group>
                  <group name="pCube189">
                    <mesh name="pCube189_pink_emeshon_0" geometry={nodes.pCube189_pink_emeshon_0.geometry} material={materials.pink_emeshon} />
                    <mesh name="pCube189_white_0" geometry={nodes.pCube189_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="polySurface88" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh name="polySurface88_black_0" geometry={nodes.polySurface88_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCylinder7">
                    <mesh name="pCylinder7_black_0" geometry={nodes.pCylinder7_black_0.geometry} material={materials.black} />
                    <mesh name="pCylinder7_blue_emeshon_0" geometry={nodes.pCylinder7_blue_emeshon_0.geometry} material={materials.blue_emeshon} />
                  </group>
                  <group name="pCube1">
                    <mesh name="pCube1_big_tabel_wood_0" geometry={nodes.pCube1_big_tabel_wood_0.geometry} material={materials.big_tabel_wood} />
                  </group>
                  <group name="pCube31">
                    <mesh name="pCube31_lambert1_0" geometry={nodes.pCube31_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  <group name="polySurface96">
                    <mesh name="polySurface96_aiStandardSurface22_0" geometry={nodes.polySurface96_aiStandardSurface22_0.geometry} material={materials.aiStandardSurface22} />
                  </group>
                  <group name="polySurface119">
                    <mesh name="polySurface119_aiStandardSurface5_0" geometry={nodes.polySurface119_aiStandardSurface5_0.geometry} material={materials.aiStandardSurface5} />
                  </group>
                  <group name="pCube168">
                    <mesh name="pCube168_switches_0" geometry={nodes.pCube168_switches_0.geometry} material={materials.switches} />
                  </group>
                  <group name="polySurface126">
                    <mesh name="polySurface126_flore_wood_0" geometry={nodes.polySurface126_flore_wood_0.geometry} material={materials.flore_wood} />
                  </group>
                  <group name="pCube160">
                    <mesh name="pCube160_white_0" geometry={nodes.pCube160_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCube172">
                    <mesh name="pCube172_black_0" geometry={nodes.pCube172_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCube12">
                    <mesh name="pCube12_sofa_legs_0" geometry={nodes.pCube12_sofa_legs_0.geometry} material={materials.sofa_legs} />
                  </group>
                  <group name="polySurface152">
                    <mesh name="polySurface152_big_tabel_wood_0" geometry={nodes.polySurface152_big_tabel_wood_0.geometry} material={materials.big_tabel_wood} />
                  </group>
                  <group name="pCube9">
                    <mesh name="pCube9_tabel_wood_0" geometry={nodes.pCube9_tabel_wood_0.geometry} material={materials.tabel_wood} />
                  </group>
                  <group name="pCube32">
                    <mesh name="pCube32_lambert1_0" geometry={nodes.pCube32_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  <group name="polySurface108" position={[0, 0, -0.09]}>
                    <mesh name="polySurface108_aiStandardSurface16_0" geometry={nodes.polySurface108_aiStandardSurface16_0.geometry} material={materials.aiStandardSurface16} />
                    <mesh name="polySurface108_lambert1_0" geometry={nodes.polySurface108_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  <group name="pCube33">
                    <mesh name="pCube33_white_0" geometry={nodes.pCube33_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCube171">
                    <mesh name="pCube171_black_0" geometry={nodes.pCube171_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCube184">
                    <mesh name="pCube184_aiStandardSurface28_0" geometry={nodes.pCube184_aiStandardSurface28_0.geometry} material={materials.aiStandardSurface28} />
                  </group>
                  <group name="pCube173">
                    <mesh name="pCube173_black_0" geometry={nodes.pCube173_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface21">
                    <mesh name="polySurface21_white_0" geometry={nodes.polySurface21_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCube34">
                    <mesh name="pCube34_white_0" geometry={nodes.pCube34_white_0.geometry} material={materials.white} />
                    <mesh name="pCube34_black_0" geometry={nodes.pCube34_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCube175">
                    <mesh name="pCube175_black_0" geometry={nodes.pCube175_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCube17">
                    <mesh name="pCube17_white_0" geometry={nodes.pCube17_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCylinder9">
                    <mesh name="pCylinder9_black_0" geometry={nodes.pCylinder9_black_0.geometry} material={materials.black} />
                    <mesh name="pCylinder9_pink_emeshon_0" geometry={nodes.pCylinder9_pink_emeshon_0.geometry} material={materials.pink_emeshon} />
                  </group>
                  <group name="pCube161">
                    <mesh name="pCube161_lambert1_0" geometry={nodes.pCube161_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  <group name="polySurface109" position={[0, 0, -0.09]}>
                    <mesh name="polySurface109_aiStandardSurface18_0" geometry={nodes.polySurface109_aiStandardSurface18_0.geometry} material={materials.aiStandardSurface18} />
                  </group>
                  <group name="polySurface87" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh name="polySurface87_black_0" geometry={nodes.polySurface87_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="pCube169">
                    <mesh name="pCube169_switches_0" geometry={nodes.pCube169_switches_0.geometry} material={materials.switches} />
                  </group>
                  <group name="polySurface86">
                    <mesh name="polySurface86_chair_0" geometry={nodes.polySurface86_chair_0.geometry} material={materials.chair} />
                  </group>
                  <group name="pCube40">
                    <mesh name="pCube40_walking_rod_0" geometry={nodes.pCube40_walking_rod_0.geometry} material={materials.walking_rod} />
                  </group>
                  <group name="pCylinder8">
                    <mesh name="pCylinder8_black_0" geometry={nodes.pCylinder8_black_0.geometry} material={materials.black} />
                    <mesh name="pCylinder8_blue_emeshon_0" geometry={nodes.pCylinder8_blue_emeshon_0.geometry} material={materials.blue_emeshon} />
                  </group>
                  <group name="polySurface94" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh name="polySurface94_cups_0" geometry={nodes.polySurface94_cups_0.geometry} material={materials.cups} />
                  </group>
                  <group name="polySurface207">
                    <mesh name="polySurface207_white_0" geometry={nodes.polySurface207_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="polySurface211">
                    <mesh name="polySurface211_black_0" geometry={nodes.polySurface211_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface61">
                    <mesh name="polySurface61_black_0" geometry={nodes.polySurface61_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface208">
                    <mesh name="polySurface208_pink_emeshon_0" geometry={nodes.polySurface208_pink_emeshon_0.geometry} material={materials.pink_emeshon} />
                    <mesh name="polySurface208_white_0" geometry={nodes.polySurface208_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="pCube52">
                    <mesh name="pCube52_aiStandardSurface21_0" geometry={nodes.pCube52_aiStandardSurface21_0.geometry} material={materials.aiStandardSurface21} />
                  </group>
                  <group name="polySurface22" position={[3.22, -44.57, -1.28]} scale={[0.27, 27.84, 0.67]}>
                    <mesh name="polySurface22_white_0" geometry={nodes.polySurface22_white_0.geometry} material={materials.white} />
                  </group>
                  <group name="polySurface127">
                    <mesh name="polySurface127_concret_0" geometry={nodes.polySurface127_concret_0.geometry} material={materials.concret} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/roam-transformed.glb')
